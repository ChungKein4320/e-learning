function sendMessage() {
    const message = $("#input").val().trim();
    if (message) {
        // Tạo phần tử người dùng và thêm vào
        const userMessage = $(`<div class="message user">${message}</div>`);
        $("#chatContainer").append(userMessage);
        renderMathInElement(userMessage[0]); // Render toán học trong message người dùng

        // Ẩn phần greeting (nếu có)
        $("#greeting").hide();

        // Xóa nội dung input
        $("#input").val("");
        toggleButton();

        $.ajax({
            url: "http://localhost:5000/process",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ message: message }),
            success: function (response) {
                // Tạo phần tử phản hồi của bot và thêm vào
                const botMessage = $(`<div class="message bot">${response.result}</div>`);
                $("#chatContainer").append(botMessage);
                renderMathInElement(botMessage[0]); // Render toán học trong response từ bot
            },
            error: function () {
                const errorMessage = $(`<div class="message bot">Có lỗi xảy ra khi gửi dữ liệu.</div>`);
                $("#chatContainer").append(errorMessage);
            },
            complete: function () {
                // Cuộn xuống cuối khung chat
                $("#chatContainer").scrollTop($("#chatContainer")[0].scrollHeight);
            },
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    renderMathInElement(document.body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
    });
});

function uploadImage() {
    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    $("#greeting").hide(); // Ẩn khi gửi tin nhắn

    // const userMessage = $(`<div class="message user">📷 Đã gửi ảnh</div>`);
    // $("#chatContainer").append(userMessage);
    const reader = new FileReader();
    reader.onload = function (e) {
        const userImageMessage = $(`
        <div class="message user">
            <img src="${e.target.result}" alt="Uploaded Image" style="max-width: 200px; border-radius: 8px; margin-top: 5px;" />
        </div>
    `);
        $("#chatContainer").append(userImageMessage);
    };
    reader.readAsDataURL(file);

    $.ajax({
        url: "http://127.0.0.1:5000/process-image",
        method: "POST",
        processData: false,
        contentType: false,
        data: formData,
        success: function (response) {
            const botMessage = $(`<div class="message bot">${response.result}</div>`);
            $("#chatContainer").append(botMessage);
            renderMathInElement(botMessage[0]); // Hiển thị LaTeX nếu có

            // Cuộn xuống dưới cùng
            $("#chatContainer").scrollTop($("#chatContainer")[0].scrollHeight);
        },
        error: function () {
            $("#greeting").text("Có lỗi xảy ra khi gửi dữ liệu.");
        },
    });
}

function toggleButton() {
    const input = $("#input").val().trim();
    const btn = $("#actionButton");

    if (input.length > 0) {
        btn.html('<i class="bi bi-send-fill"></i>');
    } else {
        btn.html('<i class="bi bi-upload"></i>');
    }
}

function handleAction() {
    const input = $("#input").val().trim();
    if (input.length > 0) {
        sendMessage();
    } else {
        document.getElementById("imageInput").click();
    }
}

function handleKey(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleAction();
    }
}

const input = document.getElementById("input");
const keyboard = document.getElementById("virtualKeyboard");

// Hiển thị bàn phím khi focus vào input
input.addEventListener("click", () => {
    setTimeout(() => {
        keyboard.classList.remove("d-none");
    }, 0);
});

// Ẩn khi click ra ngoài
document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !keyboard.contains(e.target)) {
        keyboard.classList.add("d-none");
    }
});
