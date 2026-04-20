# dadvantage-ai
AI-powered everyday decision assistant (AIDI-2001 Assignment 5)

---

# Architecture

This system follows a retrieval-first (RAG-style) architecture.

User input is first matched against a structured dataset using a simple retrieval method.  
The retrieved result is then passed to a language model, which enhances the response to make it more natural and useful.

This approach was chosen because it balances simplicity, performance, and cost while still demonstrating a full end-to-end AI pipeline.

---

# Pipeline / Data Flow

1. User inputs a question in the UI  
2. The request is sent to the backend API  
3. The system searches the dataset for the best match  
4. A base answer is retrieved  
5. The base answer is passed to the LLM  
6. The LLM enhances the response  
7. The result is returned to the UI  

---

# Evaluation

The system was evaluated using multiple test cases, including:

- 5 representative use cases  
- 2 failure cases  
- a baseline comparison without LLM enhancement  

Results showed that the system performs well on structured queries but struggles with vague or out-of-scope inputs.

---

# Improvement

The system was improved by refining the prompt used in the LLM layer.

This change made responses more clear, specific, and actionable, improving overall output quality without increasing system complexity.
