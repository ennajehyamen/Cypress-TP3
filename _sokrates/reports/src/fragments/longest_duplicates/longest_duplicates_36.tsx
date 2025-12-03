src/components/SignUpForm.tsx [107:116]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    error={(touched || value !== initialValue) && Boolean(error)}
                    helperText={touched || value !== initialValue ? error : ""}
                    {...field}
                  />
                )}
              </Field>
              <Field name="lastName">
                {({ field, meta: { error, value, initialValue, touched } }: FieldProps) => (
                  <TextField
                    variant="outlined"
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



src/components/UserSettingsForm.tsx [82:91]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  error={(touched || value !== initialValue) && Boolean(error)}
                  helperText={touched || value !== initialValue ? error : ""}
                  {...field}
                />
              )}
            </Field>
            <Field name="lastName">
              {({ field, meta: { error, value, initialValue, touched } }: FieldProps) => (
                <TextField
                  variant="outlined"
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



