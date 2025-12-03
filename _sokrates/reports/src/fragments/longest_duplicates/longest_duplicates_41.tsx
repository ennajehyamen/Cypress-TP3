src/components/TransactionCreateStepTwo.tsx [164:173]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    error={(touched || value !== initialValue) && Boolean(error)}
                    helperText={touched || value !== initialValue ? error : ""}
                    {...field}
                  />
                )}
              </Field>
              <Grid
                container
                spacing={2}
                direction="row"
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



src/components/UserSettingsForm.tsx [133:142]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  error={(touched || value !== initialValue) && Boolean(error)}
                  helperText={touched || value !== initialValue ? error : ""}
                  {...field}
                />
              )}
            </Field>
            <Grid
              container
              spacing={2}
              direction="row"
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



