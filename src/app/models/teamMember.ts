import { ShirtSize } from './shirtSize';

export class TeamMember {
    id: string;
    name: string;
    email: string;
    shirtSizeId: string;
    shirtSize: ShirtSize;
    teamId: string;    
}