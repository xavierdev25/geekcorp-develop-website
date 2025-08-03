// Social media types
export interface SocialMedia {
    id_social: string;
    icon_social: string;
    alt_social: string;
    href?: string;
}

// Client access option types
export interface ClientAccessOption {
    id: string;
    label: string;
    href: string;
}

// Navigation types
export interface NavigationItem {
    label: string;
    href: string;
    isDropdown?: boolean;
    options?: ClientAccessOption[];
}

// Service types
export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
}

// Client types
export interface Client {
    id: string;
    name: string;
    logo: string;
    description?: string;
}

// Contact form types
export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    message: string;
    service?: string;
} 