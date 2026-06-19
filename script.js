const form = document.getElementById("chat-input-form")
const responseBox = document.getElementById("chatbot-response")

form.onsubmit = async (event) => {
    event.preventDefault()

    const prompt = "What is the capital of Senegal?"

    const response = await fetch(`http://localhost:11434/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'llama3.2',
            prompt: prompt,
            stream: false
        })
    })

    const data = await response.json()
    responseBox.innerText = data.response
}