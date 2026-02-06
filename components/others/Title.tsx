type TitleProps = {
  text1: string
  text2: string
}

export default function Title({ text1, text2 }: TitleProps) {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      {/* Left line */}
      <span
        aria-hidden
        className="w-8 sm:w-12 h-px bg-gray-400 dark:bg-gray-600"
      />

      {/* Text */}
      <p className=" text-gray-500 dark:text-gray-400 tracking-wide">
        {text1}{" "}
        <span className="text-gray-800 dark:text-gray-200 font-semibold">
          {text2}
        </span>
      </p>

      {/* Right line */}
      <span
        aria-hidden
        className="w-8 sm:w-12 h-px bg-gray-400 dark:bg-gray-600"
      />
    </div>
  )
}
