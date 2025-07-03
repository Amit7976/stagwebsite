import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

function CookiesPolicyForHirebieServices() {
  return (
    <>
      <Separator className="my-20 bg-gray-500 rounded-full" />
      <div className="p-10 space-y-10">
        <h3 className="font-bold text-4xl">
          6. Cookies Policy for{' '}
          <Link href="/" className="text-orange-600">
            Hirebie
          </Link>{' '}
          Services
        </h3>

        
        <div className="space-y-6">
        
          <p><Link href="/" className="text-orange-600">
              Hirebie
            </Link>{' '}
            uses general cookies for analytics, site security, and user
            preferences to deliver a functional and user-friendly website.
          </p>

          <h5 className="font-bold text-xl text-gray-600 mt-10">
            6.2.1 Types of Cookies Used
          </h5>
          <ul className="list-disc px-10 space-y-4">
            <li>
              <b>Analytics Cookies:</b> These collect anonymous usage data to
              help us improve site performance and user experience.
              <ul className="list-disc px-10 space-y-2">
                <li>
                  <b>Examples:</b> Cookies like{' '}
                  <code>analytics_session</code> or Google Analytics cookies.
                </li>
              </ul>
            </li>

            <li>
              <b>Functional Cookies:</b> These remember your site preferences
              (like dark mode or language selection).
              <ul className="list-disc px-10 space-y-2">
                <li>
                  <b>Examples:</b> Cookies like <code>theme_preference</code>.
                </li>
              </ul>
            </li>
          </ul>

          <h5 className="font-bold text-xl text-gray-600 mt-10">
            6.2.2 Benefits for Users
          </h5>
          <ul className="list-disc px-10 space-y-4">
            <li>
              <b>Better Performance:</b> Analytics cookies help identify issues
              and improve site functionality.
            </li>
            <li>
              <b>Personalization:</b> Preferences like language and theme are
              saved for a smoother experience.
            </li>
          </ul>

          <h5 className="font-bold text-xl text-gray-600 mt-10">
            6.2.3 Managing General Cookies
          </h5>
          <ul className="list-disc px-10 space-y-4">
            <li>
              <b>Viewing:</b> Users can check cookies in their browser’s cookie
              storage.
            </li>
            <li>
              <b>Disabling:</b> Some cookies can be disabled via browser
              settings, but doing so may limit site features.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CookiesPolicyForHirebieServices
