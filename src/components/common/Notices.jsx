import Title from "./Title";

const Notices = () => {
  return (
    <section className="py-8">
      <div className="container">
        <Title title={"notices"} />
        <div className="section-content grid">
          <div className="notice-item shadow-normal grid grid-cols-[160px_auto]">
            <div className="flex flex-col text-center bg-dark text-white items-center justify-center rounded-l-lg">
              <span className="text-4xl font-bold mb-2">17</span>
              <span className="text-3xl uppercase font-semibold">Sept</span>
            </div>
            <div className="p-6">
              <h5 className="mb-3 text-lg font-bold">Welcome to California</h5>
              <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                Travels
              </div>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                <small>
                  Published <u>13.01.2022</u> by
                  <a href="#!">Anna Maria Doe</a>
                </small>
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                placerat vulputate. Ut vulputate est non quam dignissim
                elementum. Donec a ullamcorper diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notices;
