const express = require('express')
const { isUnexpected } = require("@azure-rest/ai-inference");
const ModelClient = require("@azure-rest/ai-inference");
const { AzureKeyCredential } = require("@azure/core-auth")
const axios = require('axios')
const OpenAI = require('openai')
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse')
const router = express.Router()

router.get('/summary', (req, res) => {
    const token = process.env.token;
    const endpoint = process.env.endpoint;
    const modelName = process.env.modelName;

    async function main(text) {
        //  console.log(text);
        const client = new OpenAI({ baseURL: endpoint, apiKey: token });

        const response = await client.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: `Please summarize the following text: \n\n${text}` }
            ],
            temperature: 1.0,
            top_p: 1.0,
            max_tokens: 1000,
            model: modelName
        });

        // console.log(response.choices[0].message.content);
        const summary = response.choices[0].message.content
        return summary;
    }

    (async () => {
        try {
            const readfile = path.join(__dirname, "../extract/extracted_output.pdf");
            const dataBuffer = fs.readFileSync(readfile);
            const data = await pdf(dataBuffer);

            const textsummarization = data.text;
            const summary = await main(textsummarization);
            // console.log("Original text:", textsummarization, `\n`)
            // console.log("Summary:", summary);
            return res.json({ sucess: 'true', message: summary })
        } catch (error) {
            console.log(error);
        }
    })();
})

module.exports = router;