﻿namespace WebApp.ViewModels;

public class SignInViewModel
{
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
    public bool IsPresistent { get; set; }
}
