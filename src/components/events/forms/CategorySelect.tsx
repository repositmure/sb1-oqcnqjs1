import React from 'react';
import { Tag } from 'lucide-react';

interface CategorySelectProps {
  defaultValue?: string;
}

export default function CategorySelect({ defaultValue }: CategorySelectProps) {
  const categories = [
    'Music',
    'Sports',
    'Technology',
    'Arts',
    'Food',
    'Education',
    'Social',
    'Other'
  ];

  return (
    <div>
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
        <Tag className="inline-block w-4 h-4 mr-2" />
        Category
      </label>
      <select
        id="category"
        name="category"
        required
        defaultValue={defaultValue}
        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
      >
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}