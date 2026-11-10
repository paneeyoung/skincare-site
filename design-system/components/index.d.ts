export interface ButtonProps { variant?: 'primary' | 'light' | 'outline' | 'link'; size?: 'md' | 'sm'; arrow?: boolean; full?: boolean; onClick?: () => void; style?: object; children?: any }
export interface ChipProps { active?: boolean; onClick?: () => void; children?: any }
export interface IconProps { name?: 'arrow'|'leaf'|'heart'|'drop'|'sparkle'|'shield'|'flask'|'bag'|'search'|'user'|'truck'|'return'|'lock'|'box'|'insta'; size?: number; stroke?: number; color?: string; style?: object }
export interface LogoProps { size?: 'md' | 'sm'; align?: 'center' | 'left' }
export interface SectionHeadingProps { eyebrow?: string; title: string; align?: 'left' | 'center'; inverse?: boolean; children?: any }
export interface ProductCardProps { name: string; desc?: string; price: string; category?: string; image?: string; inBag?: number; onAdd?: () => void }
export interface CategoryCardProps { name: string; image?: string; onClick?: () => void }
export interface QuantityStepperProps { value: number; onInc?: () => void; onDec?: () => void }
export interface ShippingProgressProps { subtotal: number; threshold?: number; currency?: string }
export interface NavPillsProps { items: string[]; active?: string; onSelect?: (item: string) => void }
export interface NewsletterFieldProps { placeholder?: string; onSubmit?: () => void }
export interface TestimonialCardProps { quote: string; author: string }
