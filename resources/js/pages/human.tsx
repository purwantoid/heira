import {AuthenticatedLayout} from "@/layouts"

export default function Dashboard() {
    return (
        <>
            <AuthenticatedLayout title="Human">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className='mb-2 flex items-center justify-between space-y-2'>
                        <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>

                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    )
}