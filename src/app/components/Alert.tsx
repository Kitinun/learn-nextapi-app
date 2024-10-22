type AlertProps = {
  message: string;
  type?: "error" | "success";
};

export const Alert = ({ message, type = "error" }: AlertProps) => (
  <div
    className={`p-4 rounded-md ${
      type === "error"
        ? "bg-red-50 border-red-500"
        : "bg-green-50 border-green-500"
    } mb-6 border`}
  >
    <div className="flex">
      <div className="flex-shrink-0">{/* ไอคอนตรงนี้ (ถ้าต้องการ) */}</div>
      <div className="ml-3">
        <p
          className={`text-sm font-medium ${
            type === "error" ? "text-red-800" : "text-green-800"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  </div>
);
