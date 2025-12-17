// import React from "react";

export default function LandmarkExamples() {
    return (
        <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
                A11y Landmark Region Examples
            </h1>
            <ValidLandmarkExample />
            <InvalidLandmarkExample />
        </div>
    );
}

function ValidLandmarkExample() {
    return (
        <div className="valid-landmark-example p-6 mb-8 border border-green-300 rounded-lg shadow-md bg-white">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">
                Valid Landmark Structure Example
            </h2>
            <header role="banner" className="p-4 bg-blue-100 rounded mb-4">
                <h1 className="text-2xl font-bold text-blue-800">
                    Website Title
                </h1>
                <nav role="navigation" className="mt-2">
                    <ul className="flex space-x-4 text-blue-600">
                        <li>
                            <a href="#home" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main
                role="main"
                className="p-4 bg-purple-100 rounded mb-4 flex flex-wrap gap-4"
            >
                <section
                    aria-labelledby="main-content-heading"
                    className="flex-1 min-w-[300px]"
                >
                    <h2
                        id="main-content-heading"
                        className="text-2xl font-semibold text-purple-800"
                    >
                        Main Content Section
                    </h2>
                    <p className="mt-2 text-gray-700">
                        This is the main content of the page. It's enclosed
                        within a `main` landmark.
                    </p>
                </section>
                <aside
                    // role="complementary"
                    className="w-full md:w-1/3 bg-yellow-100 p-3 rounded"
                >
                    <h3 className="text-xl font-semibold text-yellow-800">
                        Related Information
                    </h3>
                    <p className="mt-1 text-gray-700">
                        This is some complementary content.
                    </p>
                </aside>
            </main>
            <footer
                role="contentinfo"
                className="p-4 bg-gray-200 rounded text-center text-gray-700"
            >
                <p>&copy; 2025 My Website</p>
            </footer>
            <hr className="my-6 border-gray-300" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Explanation for Valid Structure:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    `&lt;header role="banner"&gt;`: Represents introductory
                    content, typically containing a group of navigational aids.
                </li>
                <li>
                    `&lt;nav role="navigation"&gt;`: Contains navigational
                    links.
                </li>
                <li>
                    `&lt;main role="main"&gt;`: Represents the dominant content
                    of the `&lt;body&gt;` of a document. There should only be
                    one `main` landmark per document.
                </li>
                <li>
                    `&lt;aside role="complementary"&gt;`: Represents a section
                    of a page that consists of content that is tangentially
                    related to the content around the `aside` element, and which
                    could be considered separate from that content.
                </li>
                <li>
                    `&lt;footer role="contentinfo"&gt;`: Represents a `footer`
                    for its nearest sectioning content ancestor or for the root
                    element. Typically contains metadata about the document,
                    e.g., copyright information.
                </li>
                <li>
                    Using `role` attributes explicitly, though often redundant
                    with HTML5 semantic elements, clearly communicates the
                    landmark purpose, especially for older browsers or assistive
                    technologies.
                </li>
            </ul>
        </div>
    );
}

function InvalidLandmarkExample() {
    return (
        <div className="invalid-landmark-example p-6 mb-8 border border-red-300 rounded-lg shadow-md bg-white">
            <h2 className="text-3xl font-semibold text-red-700 mb-4">
                Invalid Landmark Structure Example
            </h2>
            <div className="p-4 bg-red-50 border border-red-200 rounded mb-4">
                <h3>Introduction</h3>
                <p className="text-red-800">
                    This is some introductory text without a proper header
                    landmark.
                </p>
            </div>
            <nav className="mb-4 p-4 bg-orange-100 rounded">
                <ul className="flex space-x-4 text-orange-600">
                    <li>
                        <a href="#item1" className="hover:underline">
                            Item 1
                        </a>
                    </li>
                    <li>
                        <a href="#item2" className="hover:underline">
                            Item 2
                        </a>
                    </li>
                </ul>
            </nav>
            <section
                role="navigation"
                className="p-4 bg-red-100 border border-red-300 rounded mb-4"
            >
                <h3 className="text-xl font-semibold text-red-800">
                    Section Title
                </h3>
                <p className="text-red-700">
                    This section incorrectly uses the `navigation` role.
                </p>
            </section>
            <footer className="p-4 bg-gray-200 rounded text-center text-gray-700 mb-4">
                <p>Contact us at info@example.com</p>
            </footer>
            <hr className="my-6 border-gray-300" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Explanation for Invalid Structure:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                    Missing a `&lt;main role="main"&gt;` landmark: This is a
                    critical omission as the main content of the page is not
                    clearly defined for assistive technologies.
                </li>
                <li>
                    `nav` element is not enclosed within a `header` or other
                    appropriate landmark: While not strictly "invalid" in all
                    contexts, it's generally best practice to group `nav` within
                    a `header` or `main` for better structure.
                </li>
                <li>
                    `&lt;section role="navigation"&gt;`: Incorrect use of
                    `role="navigation"` on a `section` element that does not
                    primarily contain navigation links. This misleads assistive
                    technologies about the purpose of the section.
                </li>
                <li>
                    `footer` is present but the overall page structure lacks
                    clear main content, which can make navigation difficult for
                    users of assistive technologies.
                </li>
                <li>
                    Lack of clear semantic HTML5 elements or ARIA roles for
                    major page sections makes it harder for screen readers to
                    understand the page structure.
                </li>
            </ul>
        </div>
    );
}
