import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTag, setSelectedTag] = useState("");

/*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

  /** Deklrasai logic filter & seacrh **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8 bg-pink-50 min-h-screen">
      {/* Header  */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-pink-600 mb-2">
          Explore Frameworks
        </h1>
        <p className="text-gray-500 font-medium">
          Modern tools for modern developers.
        </p>
      </div>

      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="bg-white border-4 border-pink-500 p-8 rounded-[2.5rem] shadow-[10px_10px_0px_0px_rgba(236,72,153,1)] flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Name & EST */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-black text-pink-700">
                  {item.name}
                </h2>
                <span className="text-[10px] font-black text-pink-300 tracking-widest mt-2 uppercase">
                  EST. {item.details.releaseYear}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 font-medium mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-pink-50 text-pink-500 border border-pink-100 px-4 py-1.5 text-[11px] font-bold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {/* Divider Line */}
              <div className="h-[2px] bg-pink-100 w-full mb-6"></div>

              {/* Footer Section: Developer & Visit Button */}
              <div className="flex justify-between items-center">
                <div className="text-xs">
                  <p className="text-pink-300 font-bold uppercase tracking-tighter mb-0.5 text-[10px]">
                    Developed By
                  </p>
                  <p className="text-pink-600 font-black text-sm leading-none">
                    {item.details.developer}
                  </p>
                </div>

                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white pl-5 pr-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-pink-700 transition-all shadow-[4px_4px_0px_0px_rgba(157,23,77,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
                >
                  Visit <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
