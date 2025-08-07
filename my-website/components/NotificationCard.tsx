import Image from "next/image";

interface NotificationCardProps {
  type: "blue" | "green";
  date: string;
  text: string;
  icon?: string;
}

export default function NotificationCard({
  type,
  date,
  text,
  icon,
}: NotificationCardProps) {
  const bgColor = {
    blue: "bg-dashboardBlue",
    green: "bg-dashboardGreen",
  }[type];

  return (
    <div
      className={`${bgColor} p-4 mt-4 rounded-lg flex items-center justify-between`}
    >
      <div className="text-white">
        <h4 className="font-bold">Notifications</h4>
        <p className="text-sm">{date}</p>
        <p className="mt-1">{text}</p>
      </div>
      {icon && <Image src={icon} alt="icon" width={60} height={60} />}
    </div>
  );
}
