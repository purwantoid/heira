import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import SettingsLayout from '@/layouts/settings/layout';
import {AuthenticatedLayout} from "@/layouts"

export default function Appearance() {
    return (
        <AuthenticatedLayout title="Password settings" withTopNav={false}>
            <Head title="Appearance settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Appearance settings" description="Update your account's appearance settings" />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </AuthenticatedLayout>
    );
}
