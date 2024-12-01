import {z} from 'zod'

export const signUpFormSchema = z.object({
  fullname: z.string().min(1, 'Name is required'),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10,15}$/, {message: 'Invalid phone number format'})
    .min(1, 'Phone number is required'),
  email: z
    .string()
    .email({message: 'Invalid email format'})
    .min(1, 'Email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[\S]{9,}$/, {
      message:
        'Password must contain at least 9 characters, including one letter, one number, one special character, and no spaces',
    }),
})

export const signInFormSchema = z.object({
  email: z
    .string()
    .email({message: 'Invalid email format'})
    .min(1, 'Fill your email'),
  password: z.string().min(1, 'Password is required'),
})

export const addCarFormSchema = z.object({
  code: z
    .string()
    .regex(/^\d{2}[A-Z]-\d{4,5}$/, {message: 'Invalid plate format'})
    .min(1, 'Fill in your car plate'),
  name: z.string().min(1, 'Name is required'),
  userId: z.string().optional()
})

export const adminAddCarFormSchema = z.object({
  code: z
    .string()
    .regex(/^\d{2}[A-Z]-\d{4,5}$/, {message: 'Invalid plate format'})
    .min(1, 'Fill in your car plate'),
  name: z.string().min(1, 'Name is required'),
  userId: z.string().min(1, 'Name is required')
})


export const buyTicketFormSchema = z.object({
  fullname: z.string(),
  code: z.string().min(1, 'Car is required'),
  ticketType: z.string().min(1, 'Ticket type is required'),
  validTime: z
    .date()
    .min(new Date(), {message: 'Ngày bắt đầu không thể ở quá khứ.'}),
})
