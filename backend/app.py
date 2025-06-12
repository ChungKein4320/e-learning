from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import base64

app = Flask(__name__)
CORS(app)  # Cho phép mọi nguồn truy cập

client = openai.OpenAI(api_key=open("../key.txt").read())

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    message = data.get('message', '')
    
    print(f"User: {message}")  # In câu hỏi từ người dùng
    
    # Gọi OpenAI để lấy phản hồi
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system", 
                "content": "You are an AI information support, please give results using MathJax."
            },
            
            {
                "role": "user",
                "content": message
            },
        ],
        max_tokens=1000
    )

    result = completion.choices[0].message.content
    
    print(f"Bot: {result}")  # In phản hồi từ AI
    
    return jsonify({'result': result})

@app.route('/process-image', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image_file = request.files['image']

    # Đọc nội dung ảnh từ bộ nhớ và encode base64
    image_bytes = image_file.read()
    base64_image = base64.b64encode(image_bytes).decode("utf-8")
    
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Extract the following image. If it is a formula, convert it to LaTeX. If it is text, keep it as text, no further explanation."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{base64_image}"
                        }
                    }
                ]
            }
        ]
    )

    message = response.choices[0].message.content
    
    # Gọi OpenAI để lấy phản hồi
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system", 
                "content": "You are an AI information support, please give results using MathJax."
            },
            
            {
                "role": "user",
                "content": message
            },
        ],
        max_tokens=1000
    )
    
    result = completion.choices[0].message.content
    
    print(f"Bot: {result}")  # In phản hồi từ AI
    
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
