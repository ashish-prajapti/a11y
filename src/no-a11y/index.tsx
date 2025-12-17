export default function NoA11yPage() {
    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen p-8 font-sans">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-teal-300">
                    Web Accessibility (A11y) Examples
                </h1>
                <p className="text-lg text-gray-400 mt-2">
                    Showcasing common WCAG "A" and "AA" violations.
                </p>
            </header>

            <main className="max-w-4xl mx-auto">
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-b-2 border-teal-400 pb-2 mb-6 text-teal-300">
                        1. Images without Alternative Text (WCAG 1.1.1 - Level
                        A)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InaccessibleImageExample />
                        <AccessibleImageExample />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-b-2 border-teal-400 pb-2 mb-6 text-teal-300">
                        2. Poor Color Contrast (WCAG 1.4.3 - Level AA)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InaccessibleColorContrastExample />
                        <AccessibleColorContrastExample />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-b-2 border-teal-400 pb-2 mb-6 text-teal-300">
                        3. Forms without Labels (WCAG 3.3.2 - Level A)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InaccessibleFormExample />
                        <AccessibleFormExample />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-b-2 border-teal-400 pb-2 mb-6 text-teal-300">
                        4. Vague Link Text (WCAG 2.4.4 - Level A)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InaccessibleLinkTextExample />
                        <AccessibleLinkTextExample />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-b-2 border-teal-400 pb-2 mb-6 text-teal-300">
                        5. Missing Keyboard Focus Indicator (WCAG 2.4.7 - Level
                        AA)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InaccessibleFocusIndicatorExample />
                        <AccessibleFocusIndicatorExample />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-b-2 border-teal-400 pb-2 mb-6 text-teal-300">
                        6. Incorrect Heading Structure (WCAG 2.4.6 - Level AA)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InaccessibleHeadingStructureExample />
                        <AccessibleHeadingStructureExample />
                    </div>
                </section>
            </main>
        </div>
    );
}

// Inaccessible Component for the image example
function InaccessibleImageExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500">
            <h3 className="text-2xl font-bold mb-4 text-red-400">
                Inaccessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                This image is missing the{" "}
                <code className="bg-gray-700 text-red-300 p-1 rounded">
                    alt
                </code>{" "}
                attribute. A screen reader would likely announce "image" or the
                filename, which provides no context for visually impaired users.
                This fails the most basic accessibility check for non-text
                content.
            </p>
            <hr />
            <img
                src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="rounded-md w-full"
                alt='test'
                // No alt attribute! This is the violation.
            />
        </div>
    );
}

// Accessible Component for the image example
function AccessibleImageExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
                Accessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                This image includes a descriptive{" "}
                <code className="bg-gray-700 text-green-300 p-1 rounded">
                    alt
                </code>{" "}
                attribute. A screen reader will read this description aloud,
                allowing the user to understand the image's content and purpose.
            </p>
            <hr />
            <img
                // src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="A close-up of a white kitten with striking blue eyes looking directly at the camera."
                className="rounded-md w-full"
            />
        </div>
    );
}

// Inaccessible Component for Color Contrast
function InaccessibleColorContrastExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500">
            <h3 className="text-2xl font-bold mb-4 text-red-400">
                Inaccessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                The white text on the light blue button has a contrast ratio of
                2.64:1, which fails the WCAG AA requirement of 4.5:1. This makes
                it difficult for users with low vision to read.
            </p>
            <div className="p-4 rounded-md bg-gray-700 text-center">
                <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                    Low Contrast Button
                </button>
            </div>
        </div>
    );
}

// Accessible Component for Color Contrast
function AccessibleColorContrastExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
                Accessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                This button's black text on a yellow background has a contrast
                ratio of over 10:1, comfortably passing the WCAG AA standard.
                The text is clear and legible.
            </p>
            <div className="p-4 rounded-md bg-gray-700 text-center">
                <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">
                    High Contrast Button
                </button>
            </div>
        </div>
    );
}

// Inaccessible Component for Form Labels
function InaccessibleFormExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500">
            <h3 className="text-2xl font-bold mb-4 text-red-400">
                Inaccessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                This input field uses a{" "}
                <code className="bg-gray-700 text-red-300 p-1 rounded">
                    placeholder
                </code>{" "}
                as a label. This is inaccessible because the placeholder
                disappears once the user starts typing, and it is not
                consistently read by screen readers.
            </p>
            <div className="p-4 rounded-md bg-gray-700">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 rounded bg-gray-600 text-gray-200 placeholder-gray-400"
                />
            </div>
        </div>
    );
}

// Accessible Component for Form Labels
function AccessibleFormExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
                Accessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                This input uses a{" "}
                <code className="bg-gray-700 text-green-300 p-1 rounded">
                    &lt;label&gt;
                </code>{" "}
                element correctly associated with the input via the{" "}
                <code className="bg-gray-700 text-green-300 p-1 rounded">
                    for
                </code>{" "}
                and{" "}
                <code className="bg-gray-700 text-green-300 p-1 rounded">
                    id
                </code>{" "}
                attributes. This provides a persistent, clickable label for all
                users.
            </p>
            <div className="p-4 rounded-md bg-gray-700">
                <label
                    htmlFor="name-input"
                    className="block mb-2 font-bold text-gray-300"
                >
                    Your Name
                </label>
                <input
                    type="text"
                    id="name-input"
                    className="w-full p-2 rounded bg-gray-600 text-gray-200"
                />
            </div>
        </div>
    );
}

// Inaccessible Component for Vague Link Text
function InaccessibleLinkTextExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500">
            <h3 className="text-2xl font-bold mb-4 text-red-400">
                Inaccessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                The link text "Click here" is ambiguous. Screen reader users
                often navigate by listing links, and a list of "Click here"
                links provides no context about where each link goes.
            </p>
            <div className="p-4 rounded-md bg-gray-700">
                <p className="text-gray-300">
                    To find out more about our new project,{" "}
                    <a
                        href="http://google.com"
                        className="text-red-400 underline"
                    >
                        Click here
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

// Accessible Component for Vague Link Text
function AccessibleLinkTextExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
                Accessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                This link text is descriptive. It clearly communicates the
                purpose of the link without needing the surrounding text for
                context.
            </p>
            <div className="p-4 rounded-md bg-gray-700">
                <p className="text-gray-300">
                    <a href="https://test.com" className="text-green-400 underline">
                        Read more about our new project
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

// Inaccessible Component for Missing Focus Indicators
function InaccessibleFocusIndicatorExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500">
            <h3 className="text-2xl font-bold mb-4 text-red-400">
                Inaccessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                This button has its focus outline removed. Keyboard users have
                no visual indication of where they are on the page when they tab
                to this element.
            </p>
            <div className="p-4 rounded-md bg-gray-700 text-center">
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none">
                    No Focus Indicator
                </button>
            </div>
        </div>
    );
}

// Accessible Component for Missing Focus Indicators
function AccessibleFocusIndicatorExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
                Accessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                This button has a clear, visible focus state. When a keyboard
                user tabs to this element, a prominent ring appears, showing
                them exactly where they are.
            </p>
            <div className="p-4 rounded-md bg-gray-700 text-center">
                <button className="bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-green-300">
                    Visible Focus Indicator
                </button>
            </div>
        </div>
    );
}

// Inaccessible Component for Incorrect Heading Structure
function InaccessibleHeadingStructureExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-red-500">
            <h3 className="text-2xl font-bold mb-4 text-red-400">
                Inaccessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                This section skips heading levels, making it difficult for
                screen reader users to navigate the content effectively.
                Headings should descend sequentially.
            </p>
            <div className="space-y-2">
                <h1>Main Heading(h1)</h1>
                <h3>Sub-heading (h3,Skipped h2)</h3>
                <h6>Sub-sub-heading (h6, Skipped h4 and h5)</h6>
            </div>
        </div>
    );
}

// Accessible Component for Incorrect Heading Structure
function AccessibleHeadingStructureExample() {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
                Accessible Example
            </h3>
            <p className="mb-4 text-gray-300">
                This section uses a logical, sequential heading structure. This
                allows screen reader users to easily understand the document
                outline and navigate to the desired content.
            </p>
            <div className="space-y-2">
                <h1>Main Heading(h1)</h1>
                <h2>Sub-heading(h2)</h2>
                <h3>Sub-sub-heading(h3)</h3>
            </div>
        </div>
    );
}
