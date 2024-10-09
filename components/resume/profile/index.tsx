import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <div className="relative w-[180px] h-[240px] shadow-lg">
        <Image fill src="/my_photo.jpeg" alt="profile-photo" />
      </div>
    </div>
  );
}
