import { Button, Input } from '@material-tailwind/react'

const ChatInput = () => {
  return <div>
    <div
      className="flex mr-2 dark:bg-gray-900 dark:text-white flex-1 rounded-lg p-2 border border-gray-300 dark:border-gray-700 sm:w-100">
      <Input
        variant="static"
        color="indigo"
        placeholder="Type a message..."
        className=""
        containerProps={{ className: 'w-full' }}
      />
      <Button
        color="indigo"
        buttonType="filled"
        size="regular"
        rounded={false}
        block={false}
        iconOnly={false}
        ripple="light"
        className="ml-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>

      </Button>
    </div>
  </div>
}

export default ChatInput