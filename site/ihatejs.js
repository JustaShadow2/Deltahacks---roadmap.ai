// const { Configuration, OpenAIApi } = require("openai");
// const openaikey = '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'
// const configuration = new Configuration({
// apiKey: openaikey,
// });
// const openai = new OpenAIApi(configuration);


(async() => {

  let params = (new URL(document.location)).searchParams;
  let name = params.get('name'); // is the string "Jonathan Smith".

  console.log(name)

  const openaikey = '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'
    // const gptResponse = await openai.createCompletion({
    // model: "text-davinci-003",
    // prompt: "give me a list of how to pay taxes",
    // temperature: 0,
    // max_tokens: 50,
    // })
    
    fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      // withCredentials: true,
      // credentials: 'include',
      // mode: "no-cors",
      headers: {
        // 'Accept': 'application/json',
        'Authorization': `Bearer ${openaikey}`,
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "list of " + name.toString(),
        temperature: 0,
        max_tokens: 50,
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      data.choices[0].text.split('\n').forEach((line) => {
        console.log(line)
        document.write(`
        <html>
            <head>
                <meta charset="UTF-8">
                <title>roadmap.ai</title>
                <link rel="stylesheet" href="main.css">
            </head>
            <body>
                <html><p>${line}</p></html>
        
            </body>
        <div class="footer">
            <p>Demo Release by: Matthew, Arjun, and Spencer 2023</p>
          </div>
        </html>`)

        
      })
    })

    // console.log(gptResponse.data.choices[0].text)
  })()


//call openai api with node js and get the response in the console log 

