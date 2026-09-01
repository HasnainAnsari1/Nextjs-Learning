import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default function PracticeTodoPage() {
  
  // 1. Server Action Function
  async function handleFormSubmit(formData: FormData) {
    'use server';

    // Extract values form input form
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;

    // To understand in terminal 
    console.log('--- SERVER ACTION TRIGGERED ---');
    console.log('Todo Title:', title);
    console.log('Category:', category);
    console.log('Submitted Time:', new Date().toLocaleTimeString());

    // use for clear chache to show updated data
    revalidatePath('/todo')
    // To redirect after form submit
    redirect('/');
  }

  return (
    <div className="p-8 max-w-lg mx-auto border rounded-xl shadow-md my-10">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">
        Day 7: Server Actions Practice
      </h1>

      <form action={handleFormSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium">Task Title:</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Learn Next.js Server Actions"
            required
            className="w-full border p-2 rounded text-white"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category:</label>
          <select name="category" className="w-full border p-2 rounded text-white">
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition"
        >
          Submit via Server Action
        </button>
      </form>
    </div>
  );
}