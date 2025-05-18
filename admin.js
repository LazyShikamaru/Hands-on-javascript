// admin.js - Dashboard and Analytics for Hands-on JavaScript

// --- Constants ---
const ADMIN_PASSWORD = "admin123"; // Simple password for demo purposes
const STORAGE_KEY = "jsMasteryUserProgress";
const ADMIN_AUTH_KEY = "jsMasteryAdminAuth";

// --- DOM Elements ---
const loginOverlay = document.getElementById("login-overlay");
const loginForm = document.getElementById("admin-login-form");
const loginError = document.getElementById("login-error");
const logoutBtn = document.getElementById("logout-btn");
const themeToggleButton = document.getElementById("theme-toggle");

// --- Stats Elements ---
const totalUsersEl = document.getElementById("total-users");
const activeTodayEl = document.getElementById("active-today");
const projectsCompletedEl = document.getElementById("projects-completed");
const avgCompletionEl = document.getElementById("avg-completion");

// --- Chart Elements ---
const lessonCompletionChart = document.getElementById("lesson-completion-chart");
const projectDifficultyChart = document.getElementById("project-difficulty-chart");
const topLessonsChart = document.getElementById("top-lessons-chart");
const bottlenecksChart = document.getElementById("bottlenecks-chart");

// --- Tab Elements ---
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// --- Simulated User Data ---
// In a real implementation, this would come from a database
const simulatedUsers = [
    { id: "user1", lastActive: new Date(), currentLesson: 8, completedLessons: 7, completionPercentage: 12 },
    { id: "user2", lastActive: new Date(Date.now() - 86400000), currentLesson: 14, completedLessons: 13, completionPercentage: 22 },
    { id: "user3", lastActive: new Date(Date.now() - 172800000), currentLesson: 5, completedLessons: 4, completionPercentage: 7 },
    { id: "user4", lastActive: new Date(), currentLesson: 10, completedLessons: 9, completionPercentage: 15 },
    { id: "user5", lastActive: new Date(Date.now() - 259200000), currentLesson: 3, completedLessons: 2, completionPercentage: 3 }
];

// --- Authentication ---
function checkAuth() {
    const isAuthenticated = localStorage.getItem(ADMIN_AUTH_KEY) === "true";
    if (isAuthenticated) {
        loginOverlay.style.display = "none";
        initDashboard();
    } else {
        loginOverlay.style.display = "flex";
    }
}

function login(password) {
    if (password === ADMIN_PASSWORD) {
        localStorage.setItem(ADMIN_AUTH_KEY, "true");
        loginOverlay.style.display = "none";
        initDashboard();
        return true;
    }
    return false;
}

function logout() {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    location.reload();
}

// --- Dashboard Initialization ---
function initDashboard() {
    updateOverviewStats();
    initCharts();
    populateUserTable();
    initTabSystem();
}

// --- Data Collection & Analytics ---
function getUserData() {
    // In a real implementation, this would fetch data from multiple users
    // For now, we'll use simulated data and any local storage data
    
    const localUserData = localStorage.getItem(STORAGE_KEY);
    let userData = [];
    
    if (localUserData) {
        // Add the current user's data if available
        userData.push(JSON.parse(localUserData));
    }
    
    // Add simulated users to have more data to display
    userData = userData.concat(simulatedUsers);
    
    return userData;
}

function updateOverviewStats() {
    const userData = getUserData();
    
    // Calculate overview statistics
    const totalUsers = userData.length;
    
    // Count users active in the last 24 hours
    const now = new Date().getTime();
    const oneDayAgo = now - (24 * 60 * 60 * 1000);
    const activeToday = userData.filter(user => {
        const lastActive = user.lastActive ? new Date(user.lastActive).getTime() : now;
        return lastActive >= oneDayAgo;
    }).length;
    
    // Count total completed projects
    let totalCompletedProjects = 0;
    userData.forEach(user => {
        if (user.completedProjects) {
            totalCompletedProjects += Object.keys(user.completedProjects).length;
        }
    });
    
    // Calculate average completion percentage
    const totalLessons = 60; // Total number of lessons in the curriculum
    let avgCompletion = 0;
    if (totalUsers > 0) {
        const totalCompletionPercentage = userData.reduce((sum, user) => {
            const completedLessons = user.completedLessons ? Object.keys(user.completedLessons).length : 0;
            return sum + (completedLessons / totalLessons * 100);
        }, 0);
        avgCompletion = totalCompletionPercentage / totalUsers;
    }
    
    // Update the DOM
    totalUsersEl.textContent = totalUsers;
    activeTodayEl.textContent = activeToday;
    projectsCompletedEl.textContent = totalCompletedProjects;
    avgCompletionEl.textContent = `${avgCompletion.toFixed(1)}%`;
}

function getLessonCompletionData() {
    const userData = getUserData();
    const lessonCompletionCounts = {};
    
    // Initialize counts for all lessons
    for (let i = 1; i <= 60; i++) {
        lessonCompletionCounts[i] = 0;
    }
    
    // Count completions for each lesson
    userData.forEach(user => {
        if (user.completedLessons) {
            Object.keys(user.completedLessons).forEach(lessonDay => {
                lessonCompletionCounts[lessonDay] = (lessonCompletionCounts[lessonDay] || 0) + 1;
            });
        }
    });
    
    return lessonCompletionCounts;
}

function getProjectDifficultyData() {
    // For this demo, we'll simulate project difficulty based on completion rates
    // In a real implementation, this would be based on actual submission attempts
    
    return {
        "Day 1 - Project 1": 95,
        "Day 1 - Project 2": 90,
        "Day 1 - Project 3": 85,
        "Day 2 - Project 1": 80,
        "Day 2 - Project 2": 75,
        "Day 2 - Project 3": 70,
        "Day 3 - Project 1": 65,
        "Day 3 - Project 2": 60,
        "Day 3 - Project 3": 55,
        "Day 4 - Project 1": 50,
        "Day 4 - Project 2": 45,
        "Day 4 - Project 3": 40,
        "Day 5 - Project 1": 35,
        "Day 5 - Project 2": 30,
        "Day 5 - Project 3": 25,
    };
}

function getTopLessonsData() {
    const lessonCompletionCounts = getLessonCompletionData();
    
    // Convert to array and sort by completion count
    const sortedLessons = Object.entries(lessonCompletionCounts)
        .map(([day, count]) => ({ day: parseInt(day), count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10); // Top 10 lessons
    
    return sortedLessons;
}

function getBottlenecksData() {
    const lessonCompletionCounts = getLessonCompletionData();
    const userData = getUserData();
    const totalUsers = userData.length;
    
    // Calculate completion rate for each lesson
    const completionRates = {};
    for (const [day, count] of Object.entries(lessonCompletionCounts)) {
        completionRates[day] = (count / totalUsers) * 100;
    }
    
    // Find lessons with low completion rates (potential bottlenecks)
    const bottlenecks = Object.entries(completionRates)
        .map(([day, rate]) => ({ day: parseInt(day), rate }))
        .filter(item => item.day <= 14) // Only consider unlocked lessons
        .sort((a, b) => a.rate - b.rate) // Sort by lowest completion rate
        .slice(0, 10); // Top 10 bottlenecks
    
    return bottlenecks;
}

// --- Chart Initialization ---
function initCharts() {
    initLessonCompletionChart();
    initProjectDifficultyChart();
    initTopLessonsChart();
    initBottlenecksChart();
}

function initLessonCompletionChart() {
    const lessonCompletionCounts = getLessonCompletionData();
    
    // Prepare data for chart
    const labels = [];
    const data = [];
    
    // Only show first 14 days for clarity
    for (let i = 1; i <= 14; i++) {
        labels.push(`Day ${i}`);
        data.push(lessonCompletionCounts[i] || 0);
    }
    
    new Chart(lessonCompletionChart, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Completions',
                data: data,
                backgroundColor: 'rgba(123, 104, 238, 0.7)',
                borderColor: 'rgba(123, 104, 238, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Users'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Lesson'
                    }
                }
            }
        }
    });
}

function initProjectDifficultyChart() {
    const projectDifficultyData = getProjectDifficultyData();
    
    // Prepare data for chart
    const labels = Object.keys(projectDifficultyData);
    const data = Object.values(projectDifficultyData);
    
    new Chart(projectDifficultyChart, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Completion Rate (%)',
                data: data,
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 2,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Completion Rate (%)'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

function initTopLessonsChart() {
    const topLessons = getTopLessonsData();
    
    // Prepare data for chart
    const labels = topLessons.map(item => `Day ${item.day}`);
    const data = topLessons.map(item => item.count);
    
    new Chart(topLessonsChart, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Completions',
                data: data,
                backgroundColor: 'rgba(52, 152, 219, 0.7)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Users'
                    }
                }
            }
        }
    });
}

function initBottlenecksChart() {
    const bottlenecks = getBottlenecksData();
    
    // Prepare data for chart
    const labels = bottlenecks.map(item => `Day ${item.day}`);
    const data = bottlenecks.map(item => item.rate);
    
    new Chart(bottlenecksChart, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Completion Rate (%)',
                data: data,
                backgroundColor: 'rgba(231, 76, 60, 0.7)',
                borderColor: 'rgba(231, 76, 60, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Completion Rate (%)'
                    }
                }
            }
        }
    });
}

// --- User Table Population ---
function populateUserTable() {
    const userData = getUserData();
    const tableBody = document.querySelector("#user-progress-table tbody");
    
    tableBody.innerHTML = "";
    
    userData.forEach(user => {
        const row = document.createElement("tr");
        
        // Format date
        const lastActiveDate = user.lastActive ? new Date(user.lastActive) : new Date();
        const formattedDate = lastActiveDate.toLocaleDateString() + " " + lastActiveDate.toLocaleTimeString();
        
        // Calculate completion percentage
        const completedLessons = user.completedLessons ? Object.keys(user.completedLessons).length : 0;
        const completionPercentage = ((completedLessons / 60) * 100).toFixed(1);
        
        row.innerHTML = `
            <td>${user.id || "Anonymous"}</td>
            <td>${formattedDate}</td>
            <td>Day ${user.currentLesson || user.lastUnlockedLessonDay || 1}</td>
            <td>${completedLessons} / 60</td>
            <td>${completionPercentage}%</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// --- Tab System ---
function initTabSystem() {
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.dataset.tab;
            
            // Update active button
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            // Update active content
            tabContents.forEach(content => {
                content.classList.remove("active");
                if (content.id === tabId) {
                    content.classList.add("active");
                }
            });
        });
    });
}

// --- Theme Management ---
function initThemeManager() {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark-mode");
        themeToggleButton.textContent = "☀️";
    } else {
        document.body.classList.remove("dark-mode");
        themeToggleButton.textContent = "🌙";
    }
    
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggleButton.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggleButton.textContent = "🌙";
        }
    });
}

// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
    initThemeManager();
    checkAuth();
    
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const password = document.getElementById("password").value;
        if (!login(password)) {
            loginError.textContent = "Invalid password. Please try again.";
        }
    });
    
    logoutBtn.addEventListener("click", logout);
});
