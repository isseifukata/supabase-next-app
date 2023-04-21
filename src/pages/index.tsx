import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";

import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Home() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const signOut = () => {
    supabaseClient.auth.signOut();
  };
  return (
    <>
      <header className="flex justify-between px-4 py-3">
        <h1 className="text-xl">NextJS + Supabase</h1>
        {user && (
          <button onClick={signOut} className="btn btn-primary">
            Sign Out
          </button>
        )}
      </header>
      <main className="container max-w-lg p-24 mx-auto">
        {!user ? (
          <Auth
            redirectTo="/mypage"
            appearance={{ theme: ThemeSupa }}
            supabaseClient={supabaseClient}
            providers={[]}
            socialLayout="horizontal"
            localization={{
              variables: {
                sign_up: {
                  email_label: "メールアドレス",
                  password_label: "Create a Password",
                  email_input_placeholder: "Your email address",
                  password_input_placeholder: "Your password",
                  button_label: "Sign up",
                  loading_button_label: "Signing up ...",
                  social_provider_text: "Sign in with {{provider}}",
                  link_text: "Don't have an account? Sign up",
                  confirmation_text: "Check your email for the confirmation link",
                },
                sign_in: {
                  email_label: "Email address",
                  password_label: "Your Password",
                  email_input_placeholder: "Your email address",
                  password_input_placeholder: "Your password",
                  button_label: "Sign in",
                  loading_button_label: "Signing in ...",
                  social_provider_text: "Sign in with {{provider}}",
                  link_text: "Already have an account? Sign in",
                },
                magic_link: {
                  email_input_label: "Email address",
                  email_input_placeholder: "Your email address",
                  button_label: "Send Magic Link",
                  loading_button_label: "Sending Magic Link ...",
                  link_text: "Send a magic link email",
                  confirmation_text: "Check your email for the magic link",
                },
                forgotten_password: {
                  email_label: "Email address",
                  password_label: "Your Password",
                  email_input_placeholder: "Your email address",
                  button_label: "Send reset password instructions",
                  loading_button_label: "Sending reset instructions ...",
                  link_text: "Forgot your password?",
                  confirmation_text: "Check your email for the password reset link",
                },
                update_password: {
                  password_label: "New password",
                  password_input_placeholder: "Your new password",
                  button_label: "Update password",
                  loading_button_label: "Updating password ...",
                  confirmation_text: "Your password has been updated",
                },
              },
            }}
          />
        ) : (
          <div>
            <dl>
              <dt>メールアドレス</dt>
              <dd>{user?.email}</dd>
            </dl>
          </div>
        )}
      </main>
    </>
  );
}
