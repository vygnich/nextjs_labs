



export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (

        <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </p>

        </div>

    )
}