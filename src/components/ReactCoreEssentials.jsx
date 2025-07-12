import { useState } from "react";
import ExampleOfUseState from "./ExampleOfUseState";
import Greeting from "./Greeting"; // Greeting কম্পোনেন্ট ইম্পোর্ট

const ReactCoreEssentials = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "", city: "", age: 0 });
  console.log("🚀 ~ ReactCoreEssentials ~ user:", user);
  // Event handlers
  const incrementCount = () => {
    // 1st case
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // case 2
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  // user State management from parent
  const handleUser = (e) => {
    // method 1
    // setUser({
    //   ...user, //using spreed operator copy all other object property
    //   // name: e.target.value, //set value only name property
    //   [e.target.name]: e.target.value, //set value in dynamically in the property
    // });

    // mehod 2
    // setUser((prev) => {
    //   return {
    //     ...prev,
    //     [e.target.name]: e.target.value,
    //   };
    // });
    // method 3
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-sky-700">
          React Core Essentials
        </h1>
        <p className="text-lg text-slate-600">
          JSX, useState, Props, Functional Components, Event Handling
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* JSX Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-sky-600 mb-3">
            JSX (JavaScript XML)
          </h2>
          <p className="text-slate-700">
            JSX হলো JavaScript এর একটি সিনট্যাক্স এক্সটেনশন। এটি React এ UI কেমন
            দেখতে হবে তা বর্ণনা করতে ব্যবহৃত হয়। এটি HTML এর মতো দেখতে হলেও এর
            পিছনে JavaScript এর ক্ষমতা রয়েছে।
          </p>
        </section>

        {/* Functional Components Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-sky-600 mb-3">
            Functional Components
          </h2>
          <p className="text-slate-700">
            ফাংশনাল কম্পোনেন্ট হলো JavaScript ফাংশন যা props গ্রহণ করে এবং UI এর
            একটি অংশ বর্ণনা করে React এলিমেন্ট রিটার্ন করে। React Hooks (যেমন
            useState, useEffect) আসার পর থেকে এগুলি আরও শক্তিশালী হয়েছে।
          </p>
        </section>

        {/* useState & Event Handling Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-sky-600 mb-3">
            useState & Event Handling
          </h2>
          <p className="text-slate-700 mb-2">
            <code>useState</code> স্টেট ম্যানেজ করে। ইভেন্ট হ্যান্ডলিং
            ব্যবহারকারী ইন্টারঅ্যাকশন (যেমন বাটন ক্লিক) পরিচালনা করে এবং স্টেট
            আপডেট করে।
          </p>
          <div className="mt-4 p-4 border border-sky-200 rounded-md bg-sky-50">
            <p className="text-lg font-medium text-slate-700 mb-3">
              কাউন্টার: <span className="font-bold text-sky-600">{count}</span>
            </p>
            <div className="flex space-x-3">
              <button
                onClick={incrementCount}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                বৃদ্ধি (+)
              </button>
              <button
                onClick={decrementCount}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                হ্রাস (-)
              </button>
            </div>
          </div>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-sky-600 mb-3">
            useState & Event Handling
          </h2>
          <p className="text-slate-700 mb-2">
            <code>useState</code> স্টেট ম্যানেজ করে। ইভেন্ট হ্যান্ডলিং
            ব্যবহারকারী ইন্টারঅ্যাকশন (যেমন বাটন ক্লিক) পরিচালনা করে এবং স্টেট
            আপডেট করে।
          </p>
          <p className="text-lg font-medium text-slate-700 mb-3">
            কাউন্টার:{" "}
            <span className="font-bold text-sky-600">{user.name}</span>
          </p>
          {/* <ExampleOfUseState user={user} setUser={setUser} /> */}
          <ExampleOfUseState handleUser={handleUser} />
        </section>
        {/* Props Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-sky-600 mb-3">
            Props (Properties)
          </h2>
          <p className="text-slate-700 mb-2">
            Props হলো কম্পোনেন্টগুলোতে ডাটা পাস করার একটি উপায়। এগুলি অনেকটা
            HTML অ্যাট্রিবিউটের মতো, যা প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড
            কম্পোনেন্টে ডাটা পাঠাতে ব্যবহৃত হয়। Props শুধুমাত্র রিড-অনলি
            (read-only) হয়।
          </p>
          <Greeting title="স্বাগতম!" message="এটি Props এর একটি উদাহরণ।" />
          <Greeting
            title="আরেকটি বার্তা"
            message="Props ব্যবহার করে কম্পোনেন্ট পুনঃব্যবহারযোগ্য করা যায়।"
          />
        </section>

        {/* Event Handling Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-sky-600 mb-3">
            Event Handling
          </h2>
          <p className="text-slate-700">
            React-এ ইভেন্ট হ্যান্ডলিং HTML এর মতোই, তবে কিছু সিনট্যাকটিক
            পার্থক্য রয়েছে (যেমন, camelCase ইভেন্টের নাম এবং ফাংশন পাস করা)। এটি
            ব্যবহারকারীর কার্যকলাপ যেমন ক্লিক, কীবোর্ড ইনপুট ইত্যাদির
            প্রতিক্রিয়া জানাতে ব্যবহৃত হয়।
          </p>
          <p className="mt-2 text-slate-700">
            উপরের কাউন্টারটি ইভেন্ট হ্যান্ডলিং (বাটন ক্লিক) এবং{" "}
            <code>useState</code> (স্টেট আপডেট) এর সম্মিলিত উদাহরণ।
          </p>
        </section>

        {/* Placeholder for other sections, adjusted grid columns if necessary */}
      </div>
    </div>
  );
};

export default ReactCoreEssentials;
