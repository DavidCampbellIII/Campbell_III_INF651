import useBoard from "../hooks/useBoard";
import type { TaskProgressResults } from "../types";
import { ProgressBarVariant } from "../types/componentVariants";
import { calcTaskProgress } from "../util/utils";
import ProgressBar from "./ProgressBar";

export default function SystemsHighlights() {
    const { systemsProgress } = useBoard();

    const taskProgressBySystem = systemsProgress.slice(0, 3).map(data => {
        const { 
            label, 
            colors, 
            tasksWithHours,
            tasksWithoutHours,
        } = data;

        return {
            label,
            colors,
            ...calcTaskProgress(tasksWithHours, tasksWithoutHours)
        };
    });

    const footerStart = (data: TaskProgressResults) => (
        <>
            {data.tasksCompleted} / {data.totalTasks} tasks <br />
        </>
    );

    const footerEnd = (data: TaskProgressResults) => (
        <>
            {data.totalTasks - data.tasksCompleted} tasks remaining
        </>
    );

  return (
    <div className='card'>
        <h2 className='text-3xl font-semibold text-white mb-4'>Most Backlogged Systems</h2>
        <div className='flex flex-col gap-4'>
            {systemsProgress && systemsProgress.length > 0 ? (
                <div className='flex flex-col gap-2 text-white'>
                    {taskProgressBySystem.map((data) => (
                        <ProgressBar
                            key={data.label}
                            labelStart={data.label}
                            labelEnd={`${data.completedPercentage.toFixed()}%`}
                            footerStart={footerStart(data)}
                            footerEnd={footerEnd(data)}
                            colors={data.colors}
                            inProgressPercentage={data.inProgressPercentage}
                            completedPercentage={data.completedPercentage}
                            variant={ProgressBarVariant.Compact}
                        />
                    ))}
                    <div className='text-gray-500 text-xs mt-2'>
                        Showing top 3 of {systemsProgress.length}
                    </div>
                </div> 
            ) : (
                <div className='text-gray-500'>
                    <p>No tasks found</p>
                </div>
            )}
        </div>
    </div>
  )
}