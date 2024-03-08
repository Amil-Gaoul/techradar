export enum RadarRing {
    adopt = 'adopt',
    trial = 'trial',
    assess = 'assess',
    hold = 'hold'
}

export enum RadarQuadrant {
    tools = 'tools',
    platforms = 'platforms',
    techniques = 'techniques',
    languages = 'languages & frameworks'
}

export interface RadarDot {
    name: string;
    ring: string;
    quadrant: string;
    isNew: boolean;
    description: boolean;
}
