import Image from "next/image";

const SkillSection = ({ title, skills }) => {
  return (
    <div className="rounded-2xl p-1 bg-babyPowder dark:bg-neutral900 mb-8">
      <p className="font-semibold text-sm py-2 px-4 text-neutral900 dark:text-neutral100">
        {title}
      </p>
      <div className="border rounded-xl overflow-hidden bg-white border-neutral200 bg-lightBackground dark:bg-background dark:border-neutral800 p-2 grid sm:grid-cols-2 gap-x-2">
        {skills.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline flex items-center gap-4 p-2 rounded-lg hover:text-gray400 hover:bg-neutral200 dark:hover:bg-neutral800"
          >
            <div className="font-extralight mb-1 no-underline items-center flex gap-4 p-1 rounded-lg transition-colors">
              <div className="overflow-hidden rounded-md p-1 bg-babyPowder dark:bg-gray">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-sm font-medium tracking-medium text-neutral950 dark:text-neutral100">
                    {item.name}
                  </p>
                  <p className="text-sm font-light text-neutral600 dark:text-neutral300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
