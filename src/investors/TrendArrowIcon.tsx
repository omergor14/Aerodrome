/** Matches `investors-stock__delta` green / `investors-stock__delta--down` red */
const UP_FILL = "#89ff95";
const DOWN_FILL = "#ff8a8a";

const PATH =
  "M12.4915 19.7027L10.5116 19.7027V6.12624L4.43053 12.2074L3.01632 10.7931L11.5016 2.30787L19.9869 10.7931L18.5727 12.2074L12.4915 6.12625L12.4915 19.7027Z";

type Props = { direction: "up" | "down" };

export function TrendArrowIcon({ direction }: Props) {
  const fill = direction === "up" ? UP_FILL : DOWN_FILL;

  return (
    <svg
      className="investors-stock__trend-icon"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={
        direction === "down"
          ? {
              transform: "scaleY(-1)",
              transformOrigin: "12px 12px",
            }
          : undefined
      }
    >
      <path d={PATH} fill={fill} />
    </svg>
  );
}
