import { CharacterType } from "@/app/type/characterType";
import { textLineBreaker } from "@/utils/textUtils";

const Character = (Characteristic: CharacterType) => {
  const { title, titleIcon, description } = Characteristic;
  return (
    <div className="bg-white bg-opacity-60 border-2 rounded-lg shadow-custom w-full p-4 text-base lg:text-xl">
      <p className="sm:text-lg md:text-2xl lg:text-4xl leading-8 flex items-end gap-2">
        {title} {titleIcon}
      </p>
      <ul className="list-['○'] pl-6">
        {description.map((text) => (
          <li
            key={text}
            className="sm:text-base md:text-xl lg:text-2xl"
            dangerouslySetInnerHTML={{
              __html: textLineBreaker(text),
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Character;
