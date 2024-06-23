export function ButtonTab({ children, ...props }: { children: React.ReactNode, props?: any }) {
  return (
    <div className="p-4 hover:bg-gray-200 bg-gray-100 cursor-pointer text-xl" {...props}>
      <p className="text-black">{children}</p>
    </div>
  )
}
