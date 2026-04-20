# Evaluation Results

## Task
The system provides practical advice based on user questions using a retrieval + LLM pipeline.

---

## Representative Cases

### Case 1
Input: quick workout  
Output: Sure! Here’s a more helpful and conversational version of your answer with a bit more detail: If you’re short on time but still want a quick and effective workout, try spending around 30 minutes on the treadmill at a brisk walking pace. To make it even better, grab some light weights—like 2 to 5-pound dumbbells—and incorporate simple arm exercises while you walk. This combination not only boosts your cardiovascular health but also helps tone your upper body. It’s a great way to fit in a sustainable workout that’s manageable and leaves you feeling energized! 
Evaluation: Good — relevant and actionable

---

### Case 2
Input: healthy dinner  
Output: Sure! If you’re looking for ideas for a healthy dinner, there are plenty of delicious and nutritious options you can try. For example, you might consider grilled chicken or fish paired with a variety of colorful vegetables like steamed broccoli, roasted sweet potatoes, and a mixed green salad. Incorporating whole grains such as quinoa or brown rice can also add fiber and make your meal more satisfying. If you prefer something plant-based, a hearty vegetable stir-fry with tofu or legumes is a great choice. Let me know if you’d like some specific recipes or meal plans! 
Evaluation: Good — clear and useful

---

### Case 3
Input: activity with kids  
Output: Sure! Here are some fun and easy activities you can do with kids: 1. **Arts and Crafts** – Try making simple projects like painting, coloring, or creating paper crafts. It’s a great way to encourage creativity. 2. **Outdoor Games** – Playing tag, hide and seek, or a treasure hunt can keep kids active and entertained. 3. **Baking Together** – Simple recipes like cookies or cupcakes allow kids to learn measuring and following instructions while having fun. 4. **Storytime** – Reading books together or making up your own stories can spark imagination and improve language skills. 5. **Science Experiments** – Easy experiments like making a baking soda and vinegar volcano can be both educational and exciting. If you’d like, I can help suggest more specific activities based on the kids’ ages and interests!  
Evaluation: Good — appropriate suggestions

---

### Case 4
Input: quick meal  
Output: Sure! If you're looking for a quick meal, here are a few easy ideas you can try: - **Avocado toast**: Simply mash an avocado, spread it on toasted bread, and add a sprinkle of salt, pepper, and maybe a drizzle of olive oil. - **Scrambled eggs**: Whisk a couple of eggs, cook them in a pan with a bit of butter or oil, and add cheese or veggies if you like. - **Pasta with garlic and olive oil**: Boil some pasta, then toss it with sautéed garlic, olive oil, and a bit of chili flakes or Parmesan. - **Wrap or sandwich**: Use deli meats, cheese, and veggies wrapped in a tortilla or between bread slices for a quick and filling meal. Would you like a recipe for any of these, or do you want suggestions based on what you have at home?
Evaluation: Good — practical

---

### Case 5
Input: fitness plan  
Output: Sure! Creating a fitness plan depends on your goals, current fitness level, and preferences, but I’d be happy to help you get started. Are you looking to build strength, improve endurance, lose weight, or just stay active? A balanced plan usually includes a mix of cardio, strength training, and flexibility exercises. For example, you might try: - **Cardio:** 3-4 times a week (like brisk walking, running, cycling, or swimming) - **Strength training:** 2-3 times a week focusing on different muscle groups - **Flexibility:** Daily stretching or yoga to improve mobility If you let me know a bit more about what you’re aiming for and your current routine, I can help tailor a plan that fits your needs! 
Evaluation: Good — useful guidance

---

## Failure Cases

### Failure 1
Input: help me  
Output: Of course! How can I assist you today? If you can provide a bit more detail about what you need help with, I’ll do my best to provide a useful answer.
Evaluation: Weak — lacks context

---

### Failure 2
Input: what stock should I buy  
Output: I understand you're looking for stock recommendations! While I can’t provide specific investment advice, I’d be happy to help you think through some important factors to consider when choosing stocks. For example, it’s a good idea to look at companies with strong financial health, solid growth potential, and industries you understand or believe in. You might also want to consider your own risk tolerance and investment timeline. If you’re unsure where to start, consulting a financial advisor can provide personalized guidance tailored to your goals. Let me know if you want, I can also share some general tips on how to evaluate stocks!
Evaluation: Weak — outside system scope

---

## Baseline Comparison

Baseline: Retrieval only (no LLM enhancement)

Example:
Input: quick workout  
Baseline Output: simple dataset answer  
LLM Output: more natural and detailed

Conclusion:
The LLM improves clarity, tone, and usefulness of responses.

---

## Summary

The system performs well on structured, relevant queries but struggles with vague or out-of-scope inputs.

## Improvement

I improved the system by refining the prompt used in the LLM layer.

Previously, the instruction was vague, which resulted in more generic responses.  
The updated prompt now asks for clear, specific, and actionable answers.

This improves response quality while keeping the system simple and efficient.

### Example

Input: quick workout  

Before improvement:  
A simple, generic response with limited detail  

After improvement:  
A clearer and more actionable response with practical guidance  

This demonstrates that the updated prompt improves response quality.
