import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export const Info = () => {
  return (
    <ul className="grid md:grid-cols-2 gap-4 md:gap-y-4">
      <li className="flex items-start gap-4">
        <HiOutlineUser size={24} className="mt-1 text-accent" />
        <div>
          <p className="text-lg">Date of Birth</p>
          <p>20 Nov 1996</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <HiOutlineMail size={24} className="mt-1 text-accent" />
        <div>
          <p className="text-lg">Email Address</p>
          <p>jake.doe@email.com</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <HiOutlinePhone size={24} className="mt-1 text-accent" />
        <div>
          <p className="text-lg">Phone</p>
          <p>+49 123 456 7890</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <HiOutlineLocationMarker size={24} className="mt-1 text-accent" />
        <div>
          <p className="text-lg">Location</p>
          <p>Berlin, Germany</p>
        </div>
      </li>
    </ul>
  );
};
