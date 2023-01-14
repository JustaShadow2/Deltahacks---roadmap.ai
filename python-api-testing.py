'''import os
import openai
openai.api_key = ("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")
response = openai.Completion.create(
  model="text-davinci-003",
  prompt="give me a list of give me a list of how to pay taxes",
  max_tokens=700,
  temperature=0
)

print(response.choices[0].text)
'''

from flask import Flask, json
from flask import request
import os
import openai

openai.api_key = ("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")
response = openai.Completion.create(
    model="text-davinci-003",
    prompt=""
)
