import useBoardStore from "../hooks/useBoardStore";
import useFilterStore from "../hooks/useFiltersStore";

export default function Filters() {
    const { labels: departments, systems } = useBoardStore();
    const { setDepartment, setSystem, department, system } = useFilterStore();

    const handleSelectDepartment = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDepartmentId = event.target.value;
        if (selectedDepartmentId === 'all') {
            setDepartment('all');
            return;
        }
        const selectedDepartment = departments.find(department => department.id === selectedDepartmentId) ?? null;
        setDepartment(selectedDepartment?.name);
    };

    const handleSelectSystem = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSystemId = event.target.value;
        if (selectedSystemId === 'all' || selectedSystemId === 'none') {
            setSystem(selectedSystemId);
            return;
        }
        const selectedSystem = systems.find(system => system.id === selectedSystemId) ?? null;
        setSystem(selectedSystem?.name);
    };

  return (
    <div className='card'>
        <h2 className='text-3xl font-semibold text-white mb-4'>Filters</h2>
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col gap-2'>
                <label className='text-base text-subtitle' htmlFor='department-select'>
                Department
                </label>
                <select 
                    id='department-select' 
                    className='p-2 rounded bg-gray-700 text-white md:min-w-xs'
                    onChange={handleSelectDepartment}
                    defaultValue={departments.find(dep => dep.name === department)?.id || 'all'}
                >
                    {departments.length > 0 && <>
                            <option value='' disabled>Select a department</option>
                            <option value='all'>All</option>
                        </>
                    }
                    {departments.length > 0 ? departments.map(department => (
                        <option key={department.id} value={department.id}>
                            {department.name}
                        </option>
                    )) :
                        <option value=''>No departments found</option>
                    }
                </select>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-base text-subtitle' htmlFor='system-select'>
                System
                </label>
                <select 
                    id='system-select' 
                    className='p-2 rounded bg-gray-700 text-white md:min-w-xs'
                    onChange={handleSelectSystem}
                    defaultValue={systems.find(sys => sys.name === system)?.id || 'all'}
                >
                    {systems.length > 0 && <>
                            <option value='' disabled>Select a system</option>
                            <option value='all'>All</option>
                        </>
                    }
                    {systems.length > 0 ? 
                        (<>
                            {systems.map(system => (
                                <option key={system.id} value={system.id}>
                                    {system.name}
                                </option>
                            ))}
                            <option value={'none'}>
                                No system
                            </option>
                        </>)
                    :
                        <option value=''>No systems found</option>
                    }
                </select>
            </div>
        </div>
    </div>
  )
}