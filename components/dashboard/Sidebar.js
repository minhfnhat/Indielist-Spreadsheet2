import React from "react";

const Sidebar = ({ data, itemClicked }) => {
  return (
    <aside
      class="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-16 py-8"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          {data.map((item, index) => (
            <li>
              <button
                onClick={() => itemClicked(item.itemScript)}
                class="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="ms-3">{item.itemLabel}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
