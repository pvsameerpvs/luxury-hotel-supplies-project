'use client'

import { useMemo, useState } from 'react'
import { Button, TextField } from '@mui/material'

type FormState = {
  name: string
  phone: string
  email: string
  message: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const canSubmit = useMemo(() => {
    return form.name.trim() && form.phone.trim() && form.email.trim() && form.message.trim()
  }, [form])

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sent')
    setForm(initialState)
  }

  return (
    <form onSubmit={onSubmit} className="card-lux p-6 md:p-8" id="contact-form">
      <h2 className="text-2xl font-heading text-foreground">Send Us a Message</h2>
      <p className="mt-2 text-sm text-gray-600">
        Share your requirements and we will reply with pricing and lead time.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <TextField
          label="Name"
          value={form.name}
          onChange={(e) => onChange('name', e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Phone"
          value={form.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Email"
          value={form.email}
          onChange={(e) => onChange('email', e.target.value)}
          type="email"
          fullWidth
          required
        />
        <div className="hidden md:block" />
        <TextField
          label="Message"
          value={form.message}
          onChange={(e) => onChange('message', e.target.value)}
          fullWidth
          required
          multiline
          minRows={5}
          className="md:col-span-2"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="contained"
          disabled={!canSubmit}
          className="btn-gold !normal-case"
          disableElevation
        >
          Submit
        </Button>
        {status === 'sent' ? (
          <p className="text-sm text-gray-600">Thank you. Our team will contact you shortly.</p>
        ) : (
          <p className="text-sm text-gray-600">We typically respond within 2 hours.</p>
        )}
      </div>
    </form>
  )
}
