export default function TrustedBanner() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <div className="w-full bg-[#003da5] text-white text-center text-[10px] sm:text-[15px] font-medium py-2 border-t border-[#0071eb] px-[10px] sm:px-0">
      Trusted by Modern SaaS, IT, and Digital Leaders Worldwide |{" "}
      <span className="font-semibold">
        DexKor AI Suite demo slots are filling fast for {currentMonth}!
      </span>
    </div>
  );
}
