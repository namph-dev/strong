import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProgressBarProps {
    completedFields: number;
    totalFields: number;
    percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completedFields, totalFields, percentage }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold leading-[36px]">Completion point</CardTitle>
                <p className="text-sm text-gray-600">
                    You should complete all the documentation to achieve a higher score.
                </p>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg font-semibold text-gray-800">
                        {completedFields}/{totalFields}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProgressBar;
