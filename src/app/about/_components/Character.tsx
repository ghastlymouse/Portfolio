import { CharacterType } from "@/app/type/characterType";
import { textLineBreaker } from "@/utils/textUtils";

const Character = (Characteristic: CharacterType) => {
  const { title, titleIcon, description } = Characteristic;
  return (
    <div className="bg-white bg-opacity-60 border-2 rounded-lg shadow-custom w-full p-4">
      <p className="text-4xl leading-8 flex items-end gap-2">
        {title} {titleIcon}
      </p>
      <ul className="list-['○'] pl-6">
        {description.map((text) => (
          <li
            key={text}
            className=""
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
