import { GiMusicalNotes } from "react-icons/gi";
import { MdSportsKabaddi } from "react-icons/md";
import { MdBrush } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

export const categories = [
  { id: 1, label: "공연예술", icon: GiMusicalNotes, color: "#DFDB4E" },
  { id: 2, label: "스포츠레저", icon: MdSportsKabaddi, color: "#B34A3D" },
  { id: 3, label: "창작예술", icon: MdBrush, color: "#6494D6" },
  { id: 4, label: "종교봉사", icon: FaHandsHelping, color: "#4C7F3A" },
  { id: 5, label: "학술응용", icon: FaPencilAlt, color: "#1C1C1C" },
];
