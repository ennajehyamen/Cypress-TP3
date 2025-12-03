src/components/BankAccountForm.tsx [127:145]:
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
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



src/components/UserSettingsForm.tsx [133:151]:
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
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



