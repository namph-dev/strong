import React from 'react';

interface DurationItem {
    duration: number;
    duration_unit: 'hour' | 'day';
}

interface DurationFilterProps {
    durations: DurationItem[];
}

const DurationFilter: React.FC<DurationFilterProps> = ({ durations }) => {
    return (
        <div className="filter-spacing">
            <div className="header-container mb-5 mt-5">
                <h2 className="mb-3 font-bold text-text1">Duration</h2>
            </div>
            <div className="collapsible-content-container">
                <div data-automation="filter-panel-filter-set-DURATIONS">
                    <div className="one-column small-spacing-options last-visible-options-group">
                        <label className="checkbox-item flex items-center space-x-2">
                            <input className="checkbox md accent-primary" type="checkbox" value={1} />
                            <span>Day Tour & Activities</span>
                        </label>
                    </div>
                    <div className="one-column small-spacing-options last-visible-options-group">
                        <label className="checkbox-item flex items-center space-x-2">
                            <input className="checkbox md accent-primary" type="checkbox" value={3} />
                            <span>1 to 3 days</span>
                        </label>
                    </div>
                    <div className="one-column small-spacing-options last-visible-options-group">
                        <label className="checkbox-item flex items-center space-x-2">
                            <input className="checkbox md accent-primary" type="checkbox" value={4} />
                            <span>More than 3 days</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DurationFilter;
