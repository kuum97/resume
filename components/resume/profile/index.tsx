import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <div className="relative mr-6 w-[210px] h-[280px] shadow-xl">
        <Image fill src="/my_photo.jpeg" alt="profile-photo" />
      </div>
    </div>
  );
}
