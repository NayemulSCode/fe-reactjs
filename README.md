### jsx- javascript xml
মানে হলো html এর মত করে javascript লিখার সুবিধা পাওয়া,
এখন প্রশ্ন হলো আমরা যে js file html মতে করে jsx লিখব তাতে কি কোন 
রুলস আছে কিনা? নাকি html যেভাবে লিখতাম সেই রকম লিখলেই হবে। 
তাহলে উত্তর হলো না সরাসরি html লিখতে পারবো না, কিছু রুলস আছে 
১। render করা সময় একটি jsx  single parent tag return করবে,
২। সব tag এর closing tag থাকতে হবে যেমনঃ  
<img> must become <img />
৩। সব ধরনের attributes কে camelCase লিখতে হবে যেমনঃ 
clalssName, onClick, onChange

## Using curly braces {} in jsx
এইটা use করবো যখন আমাদের dynamic value দরকার হবে।
Where to use curly braces? 
সাধারনত আমার 
1. কোন tag ভিতরে dynamic value দেখাতে জেমনঃ 
As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.
2. attributes ভিতরে dynamic value দেখাতেঃ 
As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".
আবার  double curly braces dynamic css লিখতে use করবো, যেমনঃ 
style={
  {
    backgroundColor: 'black',
    color: 'pink'
  }


  
