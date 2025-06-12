document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const dropdownMenu = document.getElementById("dropdownMenu");
    const loggedInUserSpan = document.getElementById("loggedInUser").querySelector("b");
    const userIcon = document.getElementById("userIcon");

    if (loggedInUser) {
        loggedInUserSpan.textContent = loggedInUser.username;

        // Hiển thị dropdown khi hover
        const userDropdown = document.getElementById("userDropdown");
        userDropdown.addEventListener("mouseenter", () => {
            dropdownMenu.style.display = "block";
        });
        userDropdown.addEventListener("mouseleave", () => {
            dropdownMenu.style.display = "none";
        });
    } else {
        // Nếu chưa đăng nhập thì click mở modal
        userIcon.setAttribute("data-toggle", "modal");
        userIcon.setAttribute("data-target", "#authModal");
    }
});

// Toggle giữa đăng nhập / đăng ký
document.getElementById("toggleAuthMode").addEventListener("click", function (e) {
    e.preventDefault();

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const modalTitle = document.getElementById("modalTitle");
    const toggleLink = document.getElementById("toggleAuthMode");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        modalTitle.textContent = "Đăng nhập";
        toggleLink.textContent = "Chưa có tài khoản? Đăng ký";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        modalTitle.textContent = "Đăng ký";
        toggleLink.textContent = "Đã có tài khoản? Đăng nhập";
    }
});

// Xử lý đăng ký
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    let userList = JSON.parse(localStorage.getItem("userList")) || [];

    if (userList.some((u) => u.username === username)) {
        alert("Tên người dùng đã tồn tại!");
        return;
    }

    userList.push({ username, password });
    localStorage.setItem("userList", JSON.stringify(userList));
    alert("Đăng ký thành công! Bây giờ bạn có thể đăng nhập.");
    document.getElementById("toggleAuthMode").click(); // chuyển về login
});

// Xử lý đăng nhập
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const userList = JSON.parse(localStorage.getItem("userList")) || [];

    const matchedUser = userList.find((u) => u.username === username && u.password === password);
    if (matchedUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
        alert("Đăng nhập thành công!");
        location.reload();
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
});

// Đăng xuất
document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("loggedInUser");
    alert("Đã đăng xuất!");
    location.reload();
});
