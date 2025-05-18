// app.js (Version 3 - With Automatic Project Validation)

document.addEventListener("DOMContentLoaded", () => {
    // --- DOM Element Selectors ---
    const themeToggleButton = document.getElementById("theme-toggle");
    const lessonNavContainer = document.getElementById("lesson-nav");
    const lessonContentArea = document.getElementById("lesson-content");
    const motivationalQuoteText = document.getElementById("quote-text");

    // --- Application State ---
    let userProgress = {
        completedProjects: {}, // { "projectId": true }
        completedLessons: {},  // { "lessonDay": true }
        lastUnlockedLessonDay: 0,
        lastUnlockTimestamp: null
    };
    let currentLessonDay = null;
    let lastRunOutputs = {}; // Store last run output for each project: { projectId: ["output1", "output2"] }

    const MOTIVATIONAL_QUOTES = [
        "Keep coding, you're doing great!",
        "Every line of code is a step forward.",
        "Consistency is the key to mastery.",
        "Don't watch the clock; do what it does. Keep going.",
        "The only way to do great work is to love what you do.",
        "Believe you can and you're halfway there.",
        "Push yourself, because no one else is going to do it for you.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts."
    ];

    // --- 1. Theme Manager (Identical to previous version) ---
    const themeManager = (() => {
        const init = () => {
            const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
                document.body.classList.add("dark-mode");
                themeToggleButton.textContent = "☀️";
            } else {
                document.body.classList.remove("dark-mode");
                themeToggleButton.textContent = "🌙";
            }
            themeToggleButton.addEventListener("click", toggleTheme);
        };
        const toggleTheme = () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                themeToggleButton.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                themeToggleButton.textContent = "🌙";
            }
        };
        return { init };
    })();

    // --- 2. Storage Manager (Identical to previous version) ---
    const storageManager = (() => {
        const PROGRESS_KEY = "jsMasteryUserProgress";
        const loadProgress = () => {
            const savedProgress = localStorage.getItem(PROGRESS_KEY);
            if (savedProgress) {
                userProgress = JSON.parse(savedProgress);
            } else {
                userProgress.lastUnlockedLessonDay = 0;
            }
        };
        const saveProgress = () => {
            localStorage.setItem(PROGRESS_KEY, JSON.stringify(userProgress));
        };
        return { loadProgress, saveProgress };
    })();

    // --- 3. Lesson Manager (Identical to previous version, but completion relies on new project manager) ---
    const lessonManager = (() => {
        const isLessonCompleted = (lessonDay) => {
            const lesson = lessons.find(l => l.day === lessonDay);
            if (!lesson) return false;
            return lesson.projects.every(p => userProgress.completedProjects[p.id]);
        };
        const updateCompletedLessons = () => {
            lessons.forEach(lesson => {
                if (isLessonCompleted(lesson.day)) {
                    userProgress.completedLessons[lesson.day] = true;
                }
            });
        };
        const canUnlockNextLesson = () => {
            if (userProgress.lastUnlockedLessonDay === 0) {
                const allInitialLessonsCompleted = lessons.slice(0, 14).every(l => userProgress.completedLessons[l.day]);
                if (allInitialLessonsCompleted) {
                    userProgress.lastUnlockedLessonDay = 14;
                    return true;
                }
                return false;
            }
            const nextLessonToUnlock = userProgress.lastUnlockedLessonDay + 1;
            if (nextLessonToUnlock > 60) return false;
            const previousLesson = lessons.find(l => l.day === userProgress.lastUnlockedLessonDay);
            if (!previousLesson || !userProgress.completedLessons[previousLesson.day]) return false;
            const now = new Date().getTime();
            const oneDayInMillis = 24 * 60 * 60 * 1000;
            return !userProgress.lastUnlockTimestamp || (now - userProgress.lastUnlockTimestamp >= oneDayInMillis);
        };
        const unlockNextLessonIfPossible = () => {
            if (canUnlockNextLesson()) {
                const nextLessonDay = userProgress.lastUnlockedLessonDay + 1;
                if (nextLessonDay <= 60) {
                    userProgress.lastUnlockedLessonDay = nextLessonDay;
                    userProgress.lastUnlockTimestamp = new Date().getTime();
                    // console.log(`Lesson ${nextLessonDay} unlocked!`); // Keep for debugging
                    storageManager.saveProgress();
                    return true;
                }
            }
            return false;
        };
        const getUnlockedLessons = () => {
            let unlockedUpTo = 14;
            const allInitialDone = lessons.slice(0, 14).every(l => userProgress.completedLessons[l.day]);
            if (allInitialDone) {
                if (userProgress.lastUnlockedLessonDay < 14) userProgress.lastUnlockedLessonDay = 14;
                while(unlockNextLessonIfPossible()) {}
                unlockedUpTo = userProgress.lastUnlockedLessonDay;
            }
            return unlockedUpTo;
        };
        return { isLessonCompleted, updateCompletedLessons, getUnlockedLessons, unlockNextLessonIfPossible }; 
    })();

    // --- 4. UI Manager (Rendering - Button text will change here) ---
    const uiManager = (() => {
        const populateSidebar = () => {
            lessonNavContainer.innerHTML = "";
            const ul = document.createElement("ul");
            const maxUnlockedDay = lessonManager.getUnlockedLessons();
            lessons.forEach(lesson => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = "#";
                a.textContent = `Day ${lesson.day}: ${lesson.title}`;
                a.dataset.lessonDay = lesson.day;
                const isLocked = lesson.day > 14 && lesson.day > maxUnlockedDay;
                if (isLocked) {
                    a.classList.add("locked");
                    a.title = "Complete previous lessons to unlock.";
                } else {
                    a.addEventListener("click", (e) => { e.preventDefault(); displayLesson(lesson.day); });
                }
                if (userProgress.completedLessons[lesson.day]) {
                    a.classList.add("completed");
                    a.textContent += " ✔️"; 
                }
                if (lesson.day === currentLessonDay) a.classList.add("active");
                li.appendChild(a);
                ul.appendChild(li);
            });
            lessonNavContainer.appendChild(ul);
        };

        const displayLesson = (lessonDay) => {
            const lesson = lessons.find(l => l.day === lessonDay);
            if (!lesson) {
                lessonContentArea.innerHTML = `<p>Lesson not found.</p>`;
                return;
            }
            currentLessonDay = lessonDay;
            let html = `<h2>Day ${lesson.day}: ${lesson.title}</h2>`;
            html += `<p class="lesson-concept">${lesson.concept}</p>`;
            lesson.projects.forEach((project, index) => {
                const isProjectCompleted = userProgress.completedProjects[project.id];
                html += `
                    <article class="project" id="project-${project.id}">
                        <h3>Project ${index + 1}: ${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="code-editor-area">
                            <textarea id="code-${project.id}" aria-label="Code editor for ${project.title}" rows="8">${project.starterCode || "// Start your code here"}</textarea>
                            <div class="project-controls">
                                <button class="run-code-btn" data-project-id="${project.id}">Run Code</button>
                                <button class="submit-project-btn ${isProjectCompleted ? 'completed-submission' : ''}" 
                                        data-project-id="${project.id}" 
                                        ${isProjectCompleted ? 'disabled' : ''}>
                                    ${isProjectCompleted ? 'Correct ✔' : 'Submit Project'}
                                </button>
                            </div>
                            <div class="simulated-console" id="console-${project.id}" aria-live="polite"></div>
                            <div class="validation-feedback" id="feedback-${project.id}" aria-live="assertive"></div>
                        </div>
                    </article>
                `;
            });
            lessonContentArea.innerHTML = html;
            attachProjectEventListeners();
            populateSidebar();
        };

        const updateMotivationalQuote = () => {
            const randomIndex = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
            motivationalQuoteText.textContent = MOTIVATIONAL_QUOTES[randomIndex];
        };

        const displayValidationFeedback = (projectId, message, isSuccess) => {
            const feedbackArea = document.getElementById(`feedback-${projectId}`);
            if (feedbackArea) {
                feedbackArea.textContent = message;
                feedbackArea.className = 'validation-feedback'; // Reset classes
                feedbackArea.classList.add(isSuccess ? 'success' : 'error');
            }
        };

        return { populateSidebar, displayLesson, updateMotivationalQuote, displayValidationFeedback };
    })();

    // --- 5. Project Manager (Logic for running code and validating submission) ---
    const projectManager = (() => {
        const runCode = (projectId) => {
            const codeArea = document.getElementById(`code-${projectId}`);
            const consoleArea = document.getElementById(`console-${projectId}`);
            if (!codeArea || !consoleArea) return [];

            consoleArea.innerHTML = ""; 
            const userCode = codeArea.value;
            let capturedOutput = [];

            const oldLog = console.log;
            const oldWarn = console.warn;
            const oldError = console.error;
            
            const appendToConsoleAndCapture = (message, type = "log") => {
                const entry = document.createElement("div");
                const textMessage = String(message); // Ensure it's a string
                entry.textContent = textMessage;
                if (type === "error") entry.style.color = "red";
                if (type === "warn") entry.style.color = "orange";
                consoleArea.appendChild(entry);
                capturedOutput.push(textMessage.trim()); // Trim whitespace for comparison
            };

            console.log = (...args) => { appendToConsoleAndCapture(args.map(String).join(" ")); oldLog.apply(console, args); };
            console.warn = (...args) => { appendToConsoleAndCapture(args.map(String).join(" "), "warn"); oldWarn.apply(console, args); };
            console.error = (...args) => { appendToConsoleAndCapture(args.map(String).join(" "), "error"); oldError.apply(console, args); };

            try {
                new Function(userCode)();
            } catch (e) {
                console.error(e.message);
            }

            console.log = oldLog;
            console.warn = oldWarn;
            console.error = oldError;
            
            consoleArea.scrollTop = consoleArea.scrollHeight;
            lastRunOutputs[projectId] = capturedOutput; // Store for submission
            return capturedOutput;
        };

        const attemptProjectSubmission = (projectId) => {
            const lesson = lessons.find(l => l.projects.some(p => p.id === projectId));
            if (!lesson) return;
            const project = lesson.projects.find(p => p.id === projectId);
            if (!project || !project.expectedOutput) {
                uiManager.displayValidationFeedback(projectId, "Error: No validation criteria for this project.", false);
                return;
            }

            const userOutput = lastRunOutputs[projectId];
            if (!userOutput) {
                uiManager.displayValidationFeedback(projectId, "Please run your code first before submitting.", false);
                return;
            }

            // Basic validation: array length and content match (trimmed)
            const expected = project.expectedOutput.map(s => String(s).trim());
            const actual = userOutput.map(s => String(s).trim());

            let isCorrect = expected.length === actual.length && 
                              expected.every((val, index) => val === actual[index]);

            if (isCorrect) {
                userProgress.completedProjects[projectId] = true;
                const button = document.querySelector(`.submit-project-btn[data-project-id="${projectId}"]`);
                if (button) {
                    button.classList.add("completed-submission");
                    button.textContent = "Correct ✔";
                    button.disabled = true;
                }
                uiManager.displayValidationFeedback(projectId, "Correct! Project completed.", true);
                lessonManager.updateCompletedLessons();
                if (currentLessonDay >= 14 && lessonManager.isLessonCompleted(currentLessonDay)) {
                    lessonManager.unlockNextLessonIfPossible();
                }
                storageManager.saveProgress();
                uiManager.populateSidebar();
            } else {
                uiManager.displayValidationFeedback(projectId, "Output doesn't match expected. Please review your code and try again.", false);
            }
        };

        return { runCode, attemptProjectSubmission };
    })();

    // --- Event Listeners Setup ---
    function attachProjectEventListeners() {
        document.querySelectorAll(".run-code-btn").forEach(button => {
            button.addEventListener("click", () => {
                projectManager.runCode(button.dataset.projectId);
                 // Clear previous feedback when running code again
                uiManager.displayValidationFeedback(button.dataset.projectId, "", true);
            });
        });

        document.querySelectorAll(".submit-project-btn").forEach(button => {
            button.addEventListener("click", () => {
                if (!button.classList.contains("completed-submission")) {
                    projectManager.attemptProjectSubmission(button.dataset.projectId);
                }
            });
        });
    }

    // --- Initialization Function (Identical to previous version) ---
    const initApp = () => {
        themeManager.init();
        storageManager.loadProgress();
        lessonManager.updateCompletedLessons();
        lessonManager.getUnlockedLessons();
        uiManager.populateSidebar();
        uiManager.updateMotivationalQuote();
        setInterval(uiManager.updateMotivationalQuote, 60000);
        const firstNotCompletedOrLocked = lessons.find(l => 
            !userProgress.completedLessons[l.day] && 
            (l.day <= 14 || l.day <= userProgress.lastUnlockedLessonDay)
        );
        if (firstNotCompletedOrLocked) {
            uiManager.displayLesson(firstNotCompletedOrLocked.day);
        } else {
            const latestAvailable = lessons.slice().reverse().find(l => l.day <= 14 || l.day <= userProgress.lastUnlockedLessonDay);
            if (latestAvailable) uiManager.displayLesson(latestAvailable.day);
            else {
                lessonContentArea.innerHTML = 
                `<article class="lesson-placeholder">
                    <h2>Welcome to JavaScript Mastery!</h2>
                    <p>Select a lesson from the sidebar to begin your journey.</p>
                    <p>Remember, consistency is key. Try to complete your daily projects and avoid distractions. You can do this!</p>
                </article>`;
            }
        }
    };

    // --- Start the App ---
    initApp();
});

